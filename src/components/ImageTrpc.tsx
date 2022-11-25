import { useState, useEffect } from 'react';
import Image from "next/image";
import {NextPage} from "next";
import image from "./download.jpeg"
import {trpc} from "../utils/trpc";

const ImageTrpc : NextPage = () => {
    const imgFromBack = trpc.useMutation(["example.file"]);

    // const imag;
    const [src, setSrc] = useState(''); // initial src will be empty


    useEffect(() => {
        const blob = new Blob([image.src], {type: 'MIMO'})
        const img = URL.createObjectURL(blob);
        const handleLogin = () => {
            const fileUrl = img;
            console.log("fileURL blob front", fileUrl)


            imgFromBack.mutate({ fileUrl, number:2 });
            console.log("THIS IS BLOB from BACKEND:",imgFromBack.data)
        }; handleLogin()
        console.log("Blob: " + blob)
        console.log("img: " + img)
        console.log("Image.src: " + image.src)

        setSrc(img); // after component is mount, src will change
    }, []);

    return (
        <>
            <div>
                <img src={src} />
            </div>
        </>
    )
}

export default ImageTrpc