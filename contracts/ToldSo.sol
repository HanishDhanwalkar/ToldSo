pragma solidity ^0.8.17;


contract ToldSo {
    struct Post{
        string title;
        string body;
        uint256 timestamp;
    }

    mapping(address => Post[]) private _authorToPosts;

    function createPost(string memory title, string memory content) external {
        Post memory post = Post(title, content, block.timestamp);
        _authorToPosts[msg.sender].push(post);
    }

    function getPostsByAuthor(address author)
        external
        view
        returns (Post[] memory)
    {
        return _authorToPosts[author];
    }
}
    