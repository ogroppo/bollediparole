
import SimpleSchema from 'simpl-schema'

BubbleCollection = new Mongo.Collection('BubbleCollection');

BubbleCollection.attachSchema(
	new SimpleSchema({
		title: {
			type: String,
			min: 1,
			optional: false,
		},
		categories: {
			type: Array,
			optional: false
		},
		'categories.$': {
			type: String,
			min: 1
		},
    votes: {
      type: Array,
      optional: true
    },
    'votes.$': {
      type: Object,
    },
    'votes.$.userId': {
      type: String,
      optional: false
    },
    'votes.$.date': {
      type: Date,
      optional: false,
    },
		text: {
			type: String,
			min: 1,
			optional: false
		},
		createdBy: {
			type: String,
			autoValue: function() {
				if (this.isInsert) {
					return this.userId;
				} else if (this.isUpsert) {
	 				return { $setOnInsert: this.userId };
				} else {
					this.unset();
				}
			}
		},
		createdAt: {
			type: Date,
			autoValue: function() {
				if (this.isInsert) {
					return new Date();
				} else if (this.isUpsert) {
					return { $setOnInsert: new Date() };
				} else {
					this.unset();
				}
			}
		},
		updatedBy: {
			type: String,
			denyInsert: true,
			optional: true,
			autoValue: function() {
				if (this.isUpdate) {
					return this.userId;
				} else {
					this.unset();
				}
			}
		},
		updatedAt: {
			type: Date,
			denyInsert: true,
			optional: true,
			autoValue: function() {
				if (this.isUpdate) {
					return new Date();
				} else {
					this.unset();
				}
			}
		}
	})
)
