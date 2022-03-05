
import SimpleSchema from 'simpl-schema'

CategoryCollection = new Mongo.Collection('CategoryCollection');

CategoryCollection.attachSchema(
	new SimpleSchema({
		name: {
			type: String,
			min: 1,
			optional: false,
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
		}
	})
)
