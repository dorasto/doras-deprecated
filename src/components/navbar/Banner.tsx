import { Alert, AlertTitle } from "@/components/ui/alert";

export function NavBanner() {
    return (
        <Alert className="">
            <AlertTitle className="items-top flex">
                Attention Mystlink Users! Doras will soon replace Mystlink.
                <a href="https://docs.doras.to/mystlink" className="link ml-1 font-bold">
                    Learn more
                </a>
            </AlertTitle>
        </Alert>
    );
}
