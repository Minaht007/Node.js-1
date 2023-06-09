const { isUtf8 } = require("buffer");
const fs = require("fs/promises");
const path = require("path");

const { nanoid } = require("nanoid");

const contactPath = path.join(__dirname, "./db/contact.json");

const listContacts = async () => {
  const contacts = await fs.readFile(contactPath, isUtf8);
  return JSON.parse(contacts);
};

const getContactById = async (id) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result;
};
const getByName = async (name) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.name === name);
  return result;
};

const getByEmail = async (email) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.email === email);
  return result;
};

const getByPhone = async (phone) => {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.phone === phone);
  return result;
};

const addContact = async (data) => {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...data,
  };
  contacts.push(newContact);
  await fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  //   прописую лог для понятия ошибки
  const logContacts = (contacts) => {
    fs.appendFile("readMe.log", contacts());
    console.log(logContacts);
  };
  return newContact;
};
const remove = async (id) => {
  const contactId = String(id);
  const contacts = await listContacts();
  const indexContact = contacts.findIndex((item) => item.id === contactId);
  if (indexContact === -1) {
    return null;
  }
  contacts.splice(indexContact, 1);
  fs.writeFile(contactPath, JSON.stringify(contacts, null, 2));
  return contacts;
};

module.exports = {
  listContacts,
  getContactById,
  getByName,
  getByPhone,
  getByEmail,
  addContact,
  remove,
};
