import { Alert, AlertTitle } from "@/components/ui/alert";

export function NavBanner() {
    return (
        <Alert className="">
            <AlertTitle className="flex items-top">
                Attention Mystlink Users! Doras will soon replace Mystlink.
                <a href="https://docs.doras.to/mystlink" className="link font-bold ml-1">
                    Learn more
                </a>
            </AlertTitle>
        </Alert>
    );
}
