import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title } = category;
    return (
        <div className="directory-item-container">
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }} />
            <div className="body">
                <h2>{title}</h2>
                <h2>Shop Now</h2>
            </div>
        </div>)
}

export default DirectoryItem