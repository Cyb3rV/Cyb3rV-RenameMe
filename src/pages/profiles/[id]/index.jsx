import { getProfileById } from "@/services/getProfileById";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router"
import {Container} from "react-bootstrap"


export default function ProfilePage (){

    const router = useRouter();
    const id = router.query.id;

    const { data, isLoading } = useQuery({
        queryKey: ["profiles", id],
        queryFn: () => getProfileById(id),
    })

    if(isLoading) {
        return <Container>Loading</Container>
    }

    return (
        <Container>
            <h2>{data.Name}</h2>
            <img src={data.Picture} alt="Profile picture" width={100} height={100}/>
            <p>{data.Backstory}</p>
            
        </Container>
        )
}