import Modal from "@/components/Modal/Modal";
import * as NoteService from "@/lib/api";

interface PageProps {
    params: Promise<{ id: string }>
}

const Page = async ({params}: PageProps) => {
    const {id} = await params;
    const note = await NoteService.getNoteById(id);

    return (
        <Modal>
            <div style={{padding: '20px', maxWidth: '500px'}}>
                <h2>{note.title}</h2>
                <p>{note.content}</p>
                <div
                    style={{
                        marginTop: '10px',
                        padding: '5px 10px',
                        backgroundColor: '#f0f0f0',
                        borderRadius: '4px',
                        display: 'inline-block'
                    }}
                >
                    {note.tag}
                </div>
            </div>
        </Modal>
    );
};

export default Page;