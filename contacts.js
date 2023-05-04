const { isUtf8 } = require("buffer");
const fs = require("fs/promises");
const path = require("path");

const contactPath = path.join(__dirname, "./db/contact.json");

const getContacts = async () => {
  const contacts = await fs.readFile(contactPath, isUtf8);
  return JSON.parse(contacts);
};

const getById = async (id) => {
  const contacts = await getContacts();
  const result = contacts.find((item) => item.id === id);
  return result;
};
const getByName = async (name) => {
  const contacts = await getContacts();
  const result = contacts.find((item) => item.name === name);
  return result;
};

const getByEmail = async (email) => {
  const contacts = await getContacts();
  const result = contacts.find((item) => item.email === email);
  return result;
};

const getByPhone = async (phone) => {
  const contacts = await getContacts();
  const result = contacts.find((item) => item.phone === phone);
  return result;
};

module.exports = { getContacts, getById, getByName, getByPhone, getByEmail };
