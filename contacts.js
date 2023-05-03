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
  const contacts = await getContacts().thyen((result = contact.name === name));
};

module.exports = { getContacts, getById };
