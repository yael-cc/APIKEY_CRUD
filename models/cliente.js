// Modelo de cliente para Firestore
const db = require('../config/firebase');

const collection = db.collection('clientes');

const Cliente = {
  async create(data) {
    const docRef = await collection.add(data);
    return { id: docRef.id, ...data };
  },
  async getAll() {
    const snapshot = await collection.get();
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  },
  async getById(id) {
    const doc = await collection.doc(id).get();
    if (!doc.exists) return null;
    return { id: doc.id, ...doc.data() };
  },
  async update(id, data) {
    await collection.doc(id).update(data);
    return this.getById(id);
  },
  async delete(id) {
    await collection.doc(id).delete();
    return { id };
  }
};

module.exports = Cliente;
