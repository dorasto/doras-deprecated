import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
interface Props {
    // Define any props that the component will receive
}

const TestButton: React.FC<Props> = (props) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger>Open</DialogTrigger>
                <DialogContent className="absolute max-w-xl">
                    <DialogHeader>
                        <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                        <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default TestButton;
