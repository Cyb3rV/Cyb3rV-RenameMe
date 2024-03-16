import { getProfiles } from "@/services/getProfiles"
import { useQuery } from "@tanstack/react-query";
//import { useEffect, useState } from "react"
import {Container} from "react-bootstrap"
import Link from "next/link";

export default function ProfilePage (){

    // const [profiles, setProfiles] = useState([]);

    // useEffect(() => {
    //     getProfiles().then(setProfiles);
    // }, []);

    const {data, isLoading} = useQuery({
        queryKey: ["profiles"],
        queryFn: getProfiles,
        refetchOnWindowFocus: true,
    });

    if(isLoading) {
        return <Container>Loading</Container>
    }

    return (
    <Container>
        Profiles 
        <ul>
            {data.map((profile) => (
                <li key={profile.id}>
                <Link href={`/profiles/${profile.id}`}>{profile.Name}</Link>               
                </li>
            ))}
        </ul>
    </Container>);
}