import type { RequestHandler } from "@sveltejs/kit";

// TODO: Persist in database
let todos: Todo[] = [];

export const get: RequestHandler = () => {
    return {
        status: 200,
        body: todos
    }
}

export async function post({ params, request }) {
    const body = await request.formData();
    todos.push({
        created_at: new Date(),
        text: body.get('text'),
        done: false
    });
    
    return { 
        status: 303,
        headers: {
            location: "/"
        }
    };
}