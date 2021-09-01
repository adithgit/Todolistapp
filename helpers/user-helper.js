const db = require('../config/connection');
const Promise = require('promise');
const { reject, resolve } = require('promise');
const ObjectId = require('mongodb').ObjectId
module.exports = {
    addItem : (itemName) => {
        return new Promise((resolve,reject)=>{
            db.get().collection("list").insertOne({workName:itemName}).then((response)=>{
                resolve(response)
            })
        })
    },
    getItems : ()=>{
        return new Promise(async (resolve,reject)=>{
            let items = await db.get().collection('list').find().toArray();
            resolve(items)
        })
    },
    removeItem : async (listId)=>{
       return new Promise (async (resovle,reject)=>{
           await db.get().collection('list').deleteOne({_id:ObjectId(listId)}).then((response)=>{
               resolve(response)
           })
       })
    },
    editItem : async (itemDef,itemId) => {
        return new Promise((resolve,reject)=>{
            db.get().collection('list').updateOne({_id:ObjectId(itemId)},{
                $set :{"workName" : itemDef}
            }).then(()=>{
                resolve()
            })
        })
    }
}