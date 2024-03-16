export async function getProfiles () {
    const response = await fetch ("https://supademo.ernestofreyre.com/api/profiles");
    const data = await response.json();
    return data;
}