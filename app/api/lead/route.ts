// app/api/lead/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export async function POST(req: NextRequest) {
  const body = await req.json();
  const {
    name,
    email,
    countryCode,
    whatsapp,
    idea,
    timeline,
    budget,
    services,
  } = body;
  console.log("Received data:", JSON.stringify(body));
  try {
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: {
        Name: {
          title: [{ text: { content: name || "" } }],
        },
        Email: {
          email: email || "",
        },
        WhatsApp: {
          rich_text: [{ text: { content: `${countryCode}${whatsapp}` || "" } }],
        },
        Idea: {
          rich_text: [{ text: { content: idea || "" } }],
        },
        Timeline: {
          select: { name: timeline || "Unspecified" },
        },
        // CountryCode: {
        //   select: { name: countryCode || 'Unspecified' },
        // },
        Budget: {
          rich_text: [{ text: { content: budget } }],
        },
        Services: {
          multi_select: services?.map((s: string) => ({ name: s })) || [],
        },
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Notion Error:", err);
    return NextResponse.json(
      { error: "Failed to add to Notion" },
      { status: 500 },
    );
  }
}
