import { createClient } from "@supabase/supabase-js";
import cookie from "cookie";
import Cookies from "js-cookie";
import type { Server } from "./server_types";
export { Cookies };
export const supabase = createClient(import.meta.env.PUBLIC_SUPABASE_URL, import.meta.env.PUBLIC_SUPABASE_KEY, { auth: { persistSession: true } });

export async function getUser(req: Request) {
    const c = cookie.parse(req.headers.get("cookie") ?? "");
    if (!c.sbat) {
        return null;
    }
    const {
        data: { user }
    } = await supabase.auth.getUser(c.sbat);
    if (!user || user.role !== "authenticated") {
        return null;
    }
    return user;
}

export function Logout() {
    console.log("Logout");
    Cookies.remove("sbat");
    location.reload();
}

export async function getUserInfo(req: Request) {
    let userstuff: any = await getUser(req);
    if (!userstuff) return null;
    //@ts-ignore
    const data: Server = await supabase.from("profiles").select().eq("id", userstuff.id);
    return data?.data[0];
}
export async function getUserId(id: string) {
    //@ts-ignore
    const data: Server = await supabase.from("profiles").select().eq("id", id);
    return data?.data[0];
}
export async function getUserUsername(username: string) {
    //@ts-ignore
    const data: Server = await supabase.from("profiles").select().eq("username", username);
    return data?.data[0];
}
export async function GetVerifiedLlinks() {
    //@ts-ignore
    const data: Server = await supabase
        .from("profiles")
        .select()
        .eq("id", import.meta.env.PUBLIC_DORAS_TO);
    return data?.data[0].verified_links;
}
export function downloadImageUser(img: string) {
    return "https://cdn.blurp.app/doras/user/" + img;
}
export async function bunnycdnRemoveImageUser(name: any) {
    const url = `https://storage.bunnycdn.com/gezel/doras/user/${name}`;
    const options = {
        method: "DELETE",
        headers: {
            AccessKey: import.meta.env.PUBLIC_BUNNYCDN_API
        }
    };
    return await fetch(url, options);
}
