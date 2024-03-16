export async function getProfileById(id){
    const response = await fetch (
        `https://supademo.ernestofreyre.com/api/profiles/${id}`
        );
    const data = await response.json();
    return data;
}