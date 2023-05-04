const contact = require("./contacts.js");

const сontactsData = async ({ action, name, id, email, phone }) => {
  switch (action) {
    case "read":
      const allContact = await contact.getContacts();
      console.log(allContact);
    case "contactName":
      const contactName = await contact.getContacts(name);
      console.log(contactName);
    case "contactsId":
      const contactId = await contact.getById(id);
      console.log(contactId);
    case "contactsPhone":
      const contactsPhone = await contact.getByPhone(phone);
      console.log(contactsPhone);
    case "contactsEmail":
      const contactsEmail = await contact.getByEmail(email);
      console.log(contactsEmail);
    // default:
    //   console.log("error");
  }
};
сontactsData({
  action: "allContact",
  contactName: "name",
  contactsPhone: "phone",
  contactsEmail: "email",
}).then((result) => console.log(result));
