import { NextRequest, NextResponse } from "next/server";
import { articles } from "@/utils/data";
import { CreateArticleDto } from "@/utils/dtos";
import { createArticleSchema } from "@/utils/validationSchema";
import { Article } from "@/utils/types";


/**
 * @method GET
 * @route ~/api/articles 
 * @desc Get all Articles
 * @access public 
 */
export function GET(request: NextRequest) {
    return NextResponse.json(articles, {status: 200});
}


/**
 * @method POST
 * @route ~/api/articles 
 * @desc Create New Article
 * @access public 
 */
export async function POST(request: NextRequest) {
    // Use CreateAticcleDto instead of Article to assume that the id is auto increment
    const body = (await request.json()) as CreateArticleDto;

    const validation = createArticleSchema.safeParse(body)
    if (!validation.success){
        return NextResponse.json({message: validation.error.errors[0].message}, {status:400})
    }

    const newArticle: Article = {
        title: body.title,
        body: body.body,
        id: articles.length + 1,
        userId: 333
    }
    articles.push(newArticle)
    console.log(articles)

    return NextResponse.json({message:'Created!!'}, {status: 201});
}