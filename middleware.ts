import { auth } from "@/lib/auth"

export default auth((_req) => {
    // Middleware logic is handled in the 'authorized' callback in auth.ts
})

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}
