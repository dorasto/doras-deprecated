import React from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
interface JoinWaitlistProps {
    text: string;
    variant?: "outline" | "ghost";
    className?: string;
}

export function JoinWaitlist({ text, variant, className }: JoinWaitlistProps) {
    const [Email, setEmail] = React.useState("");
    async function FormSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        fetch(`https://api.doras.to/email/${Email}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((json) => {
                location.href = "/waitlist"
            });
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={variant} className={className}>
                    {text}
                </Button>
            </DialogTrigger>
            <DialogContent className=" bg-gradient-to-br from-rose-600 to-orange-400 text-white">
                <form onSubmit={FormSubmit}>
                    <DialogHeader>
                        <DialogTitle className="text-2xl font-black">Join The Waitlist</DialogTitle>
                        <DialogDescription className="text-white text-base">We're currently not ready yet, but you can sign up now to join the alpha when it launches! We'll just need some information first!</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                        <div>
                            <Label htmlFor="email" className="text-right font-bold">
                                Email
                            </Label>
                            <Input id="email" placeholder="your@email.com" className="col-span-3 bg-transparent font-bold placeholder:text-white text-white" onChange={e => setEmail(e.target.value)} required />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" type="submit">
                            Join Waitlist
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
