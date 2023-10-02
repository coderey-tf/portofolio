"use server"

import { revalidatePath } from "next/cache"
import { prisma } from "./db"

export async function postEntry(formData: FormData) {
    "use server"

    const data = await prisma.guestbook.create({
        data: {
            message: formData.get("entry") as string,
            username: "hello",
        }
    })

    const delay = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("delayed")
        }, 3000);
    });

    await delay

    revalidatePath('/guestbook')
}
