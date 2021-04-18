import '../styles/cards.scss';
import Stories from './Stories';
import Card from './Card';

function Cards() {
    const commentsOne = [
        {
            user: "송재화",
            text: "와 대박",
            id: 1
        },
        {
            user: "이기수",
            text: "잘사냐",
            id: 2
        },
        {
            user: "김미송",
            text: "좋아요",
            id: 3
        },
        {
            user: "이성재",
            text: "와 레알ㅋ 대ㅋ박ㅋ",
            id: 4
        },
    ];

    const commentsTwo = [
        {
            user: "서희",
            text: "멋지당!!",
            id: 5
        },
    ];

    const commentsThree = [
        {
            user: "이동헌",
            text: "곧 한국 가요!",
            id: 6
        },
    ];

    return (
        <div className="cards">
            <Stories />

            <Card accountName="mapvault" storyBorder={ true } image="https://picsum.photos/800/900" comments={ commentsOne } likeByText="dadatlacak" likeByNumber={ 12 } hours={ 4 } />

            <Card accountName="dada" storyBorder={ true } image="https://picsum.photos/800" comments={ commentsTwo } likeByText="dadatlacak" likeByNumber={ 90 } hours={ 16 } />

            <Card accountName="xxx" storyBorder={ true } image="https://picsum.photos/800/800" comments={ commentsThree } likeByText="dadatlacak" likeByNumber={ 65 } hours={ 2 } />
        </div>
    );
}

export default Cards;