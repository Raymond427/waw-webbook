import React from 'react'
import Header from '../layout/Header'
import ChapterContentList, { ChapterContentListProvider } from '../layout/ChapterList'
import Article from '../layout/Article'
import Aside from '../layout/Aside'
import Note from '../layout/Note'
import Video from '../layout/Video'
import Quote from '../layout/Quote'

const Habits = () => {
    return (
        <main>
            <Header
                title="Habits"
                description="Mattis molestie a iaculis at erat pellentesque. Dolor purus non enim praesent elementum facilisis leo. Ultricies integer quis auctor elit sed vulputate. Vivamus at augue eget arcu dictum varius duis at consectetur."
            />
            <ChapterContentListProvider>
                <ChapterContentList />
                <Article title="Excepteur sint occaecat" subTitle="Augue eget arcu dictum">
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                    <p>Duis at tellus at urna condimentum mattis pellentesque id. Consectetur a erat nam at. Ipsum a arcu cursus vitae congue mauris. Malesuada nunc vel risus commodo viverra maecenas. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat commodo sed egestas egestas fringilla. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing. Imperdiet proin fermentum leo vel.</p>
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                </Article>
                <Aside title="Duis at consectetur">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse. Feugiat nibh sed pulvinar proin. Sit amet tellus cras adipiscing enim eu turpis egestas. Donec ac odio tempor orci dapibus. At quis risus sed vulputate odio ut enim blandit. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Velit ut tortor pretium viverra suspendisse potenti nullam. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Orci sagittis eu volutpat odio.</p>
                </Aside>
                <Note>
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                </Note>
                <Article title="Duis at tellus at urna condimentum mattis pellentesque id">
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                    <p>Duis at tellus at urna condimentum mattis pellentesque id. Consectetur a erat nam at. Ipsum a arcu cursus vitae congue mauris. Malesuada nunc vel risus commodo viverra maecenas. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat commodo sed egestas egestas fringilla. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing. Imperdiet proin fermentum leo vel.</p>
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                </Article>
                <Quote author="Bruce Lee">
                    <p>I fear not the man who has practiced 10,000 kicks once, but I do fear the man who has practiced one kick 10,000 times</p>
                </Quote>
                <Article title="Eget dolor morbi non arcu risus quis varius" subTitle="A scelerisque purus semper eget duis at tellus at">
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                    <p>Duis at tellus at urna condimentum mattis pellentesque id. Consectetur a erat nam at. Ipsum a arcu cursus vitae congue mauris. Malesuada nunc vel risus commodo viverra maecenas. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat commodo sed egestas egestas fringilla. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing. Imperdiet proin fermentum leo vel.</p>
                    <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                    <p>Duis at tellus at urna condimentum mattis pellentesque id. Consectetur a erat nam at. Ipsum a arcu cursus vitae congue mauris. Malesuada nunc vel risus commodo viverra maecenas. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat commodo sed egestas egestas fringilla. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing. Imperdiet proin fermentum leo vel.</p>
                </Article>
                <Video src="https://www.w3schools.com/html/mov_bbb.mp4" fileExtention="mp4" caption="Some dumb video I found" />
            </ChapterContentListProvider>
        </main>
    )
}

export default Habits