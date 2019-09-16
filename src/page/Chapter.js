import React from 'react'
import chapters from '../data/chapters.json'
import '../styles/Chapter.css'
import Navigation from '../Navigation'

const Chapter = ({ chapter = chapters[0] }) => {
    const backgroundImgSrc = chapter.images[chapter.images.length - 1].src
    return (
        <div className="Chapter">
            <div className="chapter-container">
                <img className="chapter-background-image" alt="chapter background" src={require(`../images/${backgroundImgSrc}`)} />
                <div className="chapter-content">
                    <Navigation hideBack showThemeToggle />
                    <main>
                        <h1>Habits</h1>
                        <p>Mattis molestie a iaculis at erat pellentesque. Dolor purus non enim praesent elementum facilisis leo. Ultricies integer quis auctor elit sed vulputate. Vivamus at augue eget arcu dictum varius duis at consectetur.</p>
                        <h4>IN THIS CHAPTER</h4>
                        <ul>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                            <li><a href="#">Duis aute irure</a></li>
                            <li><a href="#">Ut enim ad minim</a></li>
                            <li><a href="#">Sed odio morbi quis commodo odio</a></li>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                        </ul>
                        <h2>Excepteur sint occaecat</h2>
                        <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                        <p>Duis at tellus at urna condimentum mattis pellentesque id. Consectetur a erat nam at. Ipsum a arcu cursus vitae congue mauris. Malesuada nunc vel risus commodo viverra maecenas. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Volutpat commodo sed egestas egestas fringilla. Sed tempus urna et pharetra pharetra massa massa ultricies. Sit amet nisl suscipit adipiscing bibendum est ultricies. Velit laoreet id donec ultrices tincidunt arcu non. Aliquet eget sit amet tellus cras adipiscing. Imperdiet proin fermentum leo vel.</p>
                        <p>Sit amet consectetur adipiscing elit ut aliquam. Eget dolor morbi non arcu risus quis varius. Pellentesque nec nam aliquam sem et tortor consequat. Sit amet nisl purus in mollis nunc sed id. A scelerisque purus semper eget duis at tellus at. Aliquam vestibulum morbi blandit cursus risus at. Praesent tristique magna sit amet purus gravida quis blandit. Ipsum dolor sit amet consectetur adipiscing. Dapibus ultrices in iaculis nunc sed augue lacus.</p>
                        <aside>
                            <h3>Excepteur sint occaecat</h3>
                            <p>Augue eget arcu dictum varius duis at consectetur. Sit amet nisl purus in mollis nunc sed. Quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.</p>
                        </aside>
                        <p>Note: Mattis molestie a iaculis at erat pellentesque. Dolor purus non enim praesent elementum facilisis leo. Ultricies integer quis auctor elit sed vulputate. Vivamus at augue eget arcu dictum varius duis at consectetur.</p>
                        <section>
                            <h2>Excepteur sint occaecat</h2>
                            <p>Augue eget arcu dictum varius duis at consectetur. Sit amet nisl purus in mollis nunc sed. Quis eleifend quam adipiscing vitae proin. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus.</p>
                        </section>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pretium quam vulputate dignissim suspendisse. Feugiat nibh sed pulvinar proin. Sit amet tellus cras adipiscing enim eu turpis egestas. Donec ac odio tempor orci dapibus. At quis risus sed vulputate odio ut enim blandit. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Velit ut tortor pretium viverra suspendisse potenti nullam. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. Orci sagittis eu volutpat odio.</p>
                        <p>Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Bibendum est ultricies integer quis auctor elit sed. Tempor nec feugiat nisl pretium fusce id. Porta lorem mollis aliquam ut porttitor leo a. Gravida rutrum quisque non tellus orci ac auctor augue. Sit amet tellus cras adipiscing enim eu turpis egestas. Dictumst quisque sagittis purus sit amet volutpat consequat. Egestas maecenas pharetra convallis posuere morbi leo urna. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Suspendisse sed nisi lacus sed.</p>
                        <figure>
                            <video width="320" controls>
                                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                Your browser does not support HTML5 video.
                            </video>
                            <figcaption>Video</figcaption>
                        </figure>
                        <h4>FURTHER READING</h4>
                        <ul>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                            <li><a href="#">Duis aute irure</a></li>
                            <li><a href="#">Ut enim ad minim</a></li>
                            <li><a href="#">Sed odio morbi quis commodo odio</a></li>
                            <li><a href="#">Excepteur sint occaecat</a></li>
                        </ul>
                        <h4>NEXT CHAPTER</h4>
                        <button>Product</button>
                    </main>
                </div>
            </div>
        </div>
    )
}

export default Chapter