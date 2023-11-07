import { Terminal, AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export function NavBanner() {
    return (
        <Alert>
            <AlertCircle color="#fff" size={20} className="h-8 w-8x" />
            <AlertTitle>Attention Mystlink Users!</AlertTitle>
            <AlertDescription>
                We're going to work hard to migrate your profiles over. Please sit tight and we'll email you when your account is brought over! Once the email is sent, your profile will be active on Doras.{" "}
                <a href="https://docs.doras.to/getting-started/migration-from-mystlink" className="link font-bold">
                    Learn more
                </a>
            </AlertDescription>
        </Alert>
    );
}
