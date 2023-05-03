const contact = require("./contacts");

const сontacts = async ({ name, id, email, phone }) => {
  switch (сontacts) {
    case "read":
      const allContact = await contact.getContacts();
      return allContact || null;
    case "contactName":
    case "contactsId":
      const contactId = await contacts.getById(id);
      return contactId || null;
    default:
      console.log("error");
  }
};
сontacts({ contact: "allContact", contact: "contactId" });
