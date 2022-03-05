getClientBubbles = (bubbleCursor) => {
  let bubbles = []
  let anchor
  let anchorIndex
  let minX = 0, minY = 0
  let center = {
    left: 0,
    top: 0
  }
  const centerBubbleId = Session.get('centerBubbleId')
  bubbleCursor.forEach((bubble, index) => {
    bubble.r = Math.random() * 30 + 30
    if(centerBubbleId === bubble._id)
      bubble.r = 100
    bubble.width = bubble.r * 2
    bubble.height = bubble.r * 2
    bubble.index = index
    if(index === 0){
      bubble.left = 0;
      bubble.top = 0;
      anchorIndex = 0
      anchor = bubble
    }
    if(index > 0){
      const prev = bubbles[index-1]
      if(index === 1){
        bubble.left = prev.left;
        bubble.top = prev.top + prev.r + bubble.r ;
      }
      if(index > 1){
        var [x1, x2, y1, y2] = intersection(
          prev.left,
          prev.top,
          prev.r + bubble.r + 1,
          anchor.left,
          anchor.top,
          anchor.r + bubble.r + 1
        );
        bubble.left = x1;
        bubble.top = y1;

        for(var wallIndex = anchorIndex + 1; wallIndex < bubbles.length; wallIndex++){
          let wall = bubbles[wallIndex]
          let d = distance(wall.left, wall.top, bubble.left, bubble.top)
          if(d > (wall.r + bubble.r))
             break;
          let clashToWall = intersection(
            bubble.left,
            bubble.top,
            bubble.r,
            wall.left,
            wall.top,
            wall.r
          );
          if(clashToWall){
            let [_x1, _x2, _y1, _y2] = intersection(
              prev.left,
              prev.top,
              prev.r + bubble.r + 1,
              wall.left,
              wall.top,
              wall.r + bubble.r + 1
            );
            bubble.left = _x1;
            bubble.top = _y1;
            anchor = wall
            anchorIndex = wall.index
          }
        }
      }
    }

    let bubbleLeftBoundary = bubble.left - bubble.r
    if(bubbleLeftBoundary < minX)
      minX = bubbleLeftBoundary

    let bubbleTopBoundary = bubble.top - bubble.r
    if(bubbleTopBoundary < minY)
      minY = bubbleTopBoundary

    if(centerBubbleId === bubble._id)
      center = {
        left: -bubble.left,
        top: -bubble.top
      }

    bubbles.push(bubble)
  })

  return {
    bubbles,
    center
  }
}
