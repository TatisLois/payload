import { CollectionConfig } from "payload/types";

const Todo: CollectionConfig = {
  slug: "todos",
  admin: {
    useAsTitle: "listName",
  },
  access: {
    create: (args) =>
      (async (args) => {
        const payloadInstance = args?.req?.payload;
        const result = await payloadInstance.find({
          collection: "todos",
          showHiddenFields: true,
          queryHiddenFields: true,
        });
        return true;
      })(args),
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "listName",
      type: "text",
    },
    {
      name: "hiddenText",
      type: "text",
      defaultValue: "boo!",
      hidden: true,
    },
  ],
};

export default Todo;
