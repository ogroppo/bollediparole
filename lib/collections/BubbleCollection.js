
import SimpleSchema from 'simpl-schema'

BubbleCollection = new Mongo.Collection('bubbleCollection');

BubbleCollection.attachSchema(
	new SimpleSchema({
		title: {
			type: String,
			min: 1,
			optional: false,
		},
		labels: {
			type: Array,
			optional: false
		},
		'labels.$': {
			type: String,
			min: 1
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
