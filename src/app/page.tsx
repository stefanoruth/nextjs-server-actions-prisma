import { prisma } from '../prisma'

export default function Home() {
    return (
        <div>
            <h1>Hello World</h1>

            <form
                action={async data => {
                    'use server'

                    console.log(data)

                    const name = data.get('name')?.toString()

                    if (!name) {
                        throw new Error('Missing name')
                    }

                    await prisma.user.create({ data: { email: name } })
                }}>
                <input type="text" name="name" />
                <button type="submit">Save</button>
            </form>
        </div>
    )
}
