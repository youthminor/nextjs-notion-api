import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_SECRET_TOKEN,
});

export const getPagesFromDatabase = async () => {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });
    return response;
  } catch (e) {
    console.error(e);
  }
};
