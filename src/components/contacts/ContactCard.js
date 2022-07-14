import styled from "styled-components";

const CardWrapper = styled.div`
    display: flex;
    flex: 1;
    // border: 1px solid red;
    margin-top: 2vh;
    justify-content: space-between;
    padding: 2vh 1vw 2vh 1vw;
    max-height: 10vh;
`;

const ContactDetails = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    border: 1px solid grey;
    box-shadow: 3px 5px #d3cfcf;
`;

const CloseButton = styled.div`
    display: flex;
    align-self: center; 
    justify-content: flex-end;
`;

const ProfilePic = styled.img`
    border-radius: 50%;
    max-height: 100%;
`;

const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <CardWrapper>
                <ContactDetails>
                    <div>
                        <ProfilePic src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
                    </div>
                    <div>
                        <p>{firstName} {lastName}</p>
                        <p>{phoneNumber}</p>
                    </div>
                    <CloseButton>
                    <button onClick={() => null}>X</button> 
                    </CloseButton>
                </ContactDetails>
        </CardWrapper>
    )
}

export default ContactCard;


{/* <div>
<div>
    <div>
        <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
    </div>
    <div>
        <p>{firstName} {lastName}</p>
        <p>{phoneNumber}</p>
    </div>
</div>
<div>
    <button>X</button>
</div>
</div> */}