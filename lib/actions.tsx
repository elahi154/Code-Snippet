"use server"

import prisma from "@/prisma/db";
import { auth } from "@clerk/nextjs/server"
import { Language, Technology } from "@prisma/client";

export const getAllSnippets = async () =>{
    const userId = await auth()
    if(!userId.userId){
        return {
            data:[],
            status:"error",
            message:"User not found",
        };
    }
    try {
        const snippets = await prisma.snippit.findMany({
            where:{
                userId:userId.userId
            }
        })
        return {
            data:snippets,
            status:"success",
            message:"snippets fetch successfully",
        }
    } catch (error) {
        console.log(error)
        return{
            data:[],
            status:"error",
            message:"An error occured while fetching data "
        }
    }
}

export const getSnippetsByTech = async (tech:Technology) =>{
    const userId = await auth()
    if(!userId.userId){
        return {
            data:[],
            status:"error",
            message:"User not found",
        };
    }
    try {
        const snippets = await prisma.snippit.findMany({
            where:{
                userId:userId.userId,
                technology:tech
            }
        })
        return {
            data:snippets,
            status:"success",
            message:"snippets fetch successfully",
        }
    } catch (error) {
        console.log(error)
        return{
            data:[],
            status:"error",
            message:"An error occured while fetching data "
        }
    }
}
export const getSnippetsById = async (id:string) =>{
    const userId = await auth()
    if(!userId.userId){
        return {
            data:[],
            status:"error",
            message:"User not found",
        };
    }
    try {
        const snippet = await prisma.snippit.findFirst({
            where:{
                userId:userId.userId,
                id:Number(id),
            }
        })
        return {
            data:snippet,
            status:"success",
            message:"snippets fetch successfully",
        }
    } catch (error) {
        console.log(error)
        return{
            data:[],
            status:"error",
            message:"An error occured while fetching data "
        }
    }
}
export const deleteSnippetById = async (id:number) =>{
    try {
        const deletedSnippet = await prisma.snippit.delete({
            where : {
                id
            }
        })
        if(deletedSnippet){
            return {
                status:"success",
                message:"Snippet deleted successfully  "
            }
        }
    } catch (error) {
        console.log(error)
        return {
            status:"error",
            message:"An error occur while deleting snippet"
        }
    }
}
export const createSnippet = async ({
	title,
	content,
	langauge,
	technology,
}: {
	title: string;
	content: string;
	langauge: Language;
	technology: Technology;
}) => {
	const userId = await auth();
	if (!userId.userId) {
		return {
			data: [],
			status: "error",
			message: "User not found",
		};
	}
	try {
		const snippet = await prisma.snippit.create({
			data: {
				title,
				content,
				langauge,
				technology,
				userId: userId.userId,
			},
		});
		return {
			data: snippet,
			status: "success",
			message: "Snippet created successfully",
		};
	} catch (error) {
		console.log(error);
		return {
			data: [],
			status: "error",
			message: "An error occurred while creating snippet",
		};
	}
};
export const editSnippet = async ({
	title,
	content,
	langauge,
	technology,
    id,
}: {
	title: string;
	content: string;
	langauge: Language;
	technology: Technology;
    id:string;
}) => {
	const userId = await auth();
	if (!userId.userId) {
		return {
			data: [],
			status: "error",
			message: "User not found",
		};
	}
	try {
		const snippet = await prisma.snippit.update({
            where:{
                id:Number(id),
                userId:userId.userId
            },
			data: {
				title,
				content,
				langauge,
				technology,
				
			},
		});
		return {
			data: snippet,
			status: "success",
			message: "Snippet updated successfully",
		};
	} catch (error) {
		console.log(error);
		return {
			data: [],
			status: "error",
			message: "An error occurred while updating snippet",
		};
	}
};
