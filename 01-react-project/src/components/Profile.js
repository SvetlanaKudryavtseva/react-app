const Profile = () => {
    <div className="app-content">
        <img className="app-content__img--top" src="https://about.fb.com/wp-content/uploads/2018/01/well-being.png?fit=1258%2C706" alt="" />
        <div className="person">
            <img className="person__avatar" src="https://i.pinimg.com/originals/df/5f/5b/df5f5b1b174a2b4b6026cc6c8f9395c1.jpg" alt="" />
            <div className="person__info">
                <p className="person__first-name">Eva</p>
                <p className="person__last-name">Adams</p>
            </div>
            <div className="posts">
                <div className="posts__new-post"></div>
                <div className="posts__list">
                <div className="posts__item">Post 1</div>
                <div className="posts__item">Post 2</div>
            </div>
        </div>
    </div>
    Main Content
</div>
}

export default Profile;