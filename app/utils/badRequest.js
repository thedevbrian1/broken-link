import { json } from "@remix-run/netlify";

export default function badRequest(data) {
    return json(data, { status: 400 });
}