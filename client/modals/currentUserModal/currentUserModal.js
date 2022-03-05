Template.currentUserModal.created = function(){
  this.currentUpload = new ReactiveVar(false);
  this.uploadSuccess = new ReactiveVar(false);
}

Template.currentUserModal.events({
  'change #profilePicture'(e, template) {
      if (e.currentTarget.files && e.currentTarget.files[0]) {
        // We upload only one file, in case
        // multiple files were selected
        const upload = ImageCollection.insert({
          file: e.currentTarget.files[0],
          streams: 'dynamic',
          chunkSize: 'dynamic'
        }, false);

        upload.on('start', function () {
          template.currentUpload.set(this);
        });

        upload.on('end', function (error, fileObj) {
          if (error) {
            ErrorMessage('Error during upload: ' + error);
          } else {
            template.uploadSuccess.set(true);
          }
          template.currentUpload.set(false);
        });

        template.uploadSuccess.set(false);
        upload.start();
      }
    }
})
