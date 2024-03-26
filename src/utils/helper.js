export const updateComment = (comments, targetId, newComment) => {
    const commentsCopy = JSON.parse(JSON.stringify(comments));

    for (const comment of commentsCopy) {
        if (comment.id === targetId) {
            comment.subComments.push({
                id: new Date().getTime(),
                comment: newComment,
                subComments: []
            })
        }

        if(comment.subComments.length>0)
        {
            comment.subComments = updateComment(comment.subComments, targetId, newComment);
        }
    }

    return commentsCopy;
}

export const getRandomAvatar = () => {
    var imgUrl = [
        "https://styles.redditmedia.com/t5_91pqei/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfZWI5NTlhNzE1ZGZmZmU2ZjgyZjQ2MDU1MzM5ODJjNDg1OWNiMTRmZV8xNTM4MDEx_rare_6d95da76-3d84-40ad-807b-5a3153772211-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=74ef2f87428c9e777aecbd8b0a029cd06da5a04b",
        "https://preview.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfN2Q3YWFmMDNlYTUxYmMxNjU4ZTkzNWE4YWQwOWQ3N2Y4OWExZjI1MF8yMDM3MDQ3_rare_8197b1b4-a9dc-4981-b294-2e195957d6b7-headshot.png?width=64&height=64&crop=smart&auto=webp&s=8b4bf0630c2f207aaa283a4cc995b769f8467384",
        "https://styles.redditmedia.com/t5_3wd9qt/styles/profileIcon_snood35bc109-3900-4da4-8292-29b29bfd2e95-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=2a397d7e09cc6de280698b9bb7c0d7383a702da7",
        "https://preview.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfNDE2OWZmNGQzMTUwMmNiMWQwOWI4NTA0YTAwYThhNjMyZmIwODQ4Zl82MDE2Njg1_rare_2990618e-daee-42dc-a37a-ca408d240b02-headshot.png?width=64&height=64&crop=smart&auto=webp&s=ec3c6552f73c66ca39ba64d3fb330651c9868131",
        "https://styles.redditmedia.com/t5_faenw/styles/profileIcon_snoo-nftv2_bmZ0X2VpcDE1NToxMzdfNDY2YTMzMDg4N2JkZjYyZDUzZjk2OGVhODI0NzkzMTUwZjA3NzYyZV8xNjkzMQ_rare_882c2432-5799-40c2-9bcd-2dd3b4d479d2-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=ba64cc1e460de81fe5fad7a04b1877c60c9118c7",
        "https://preview.redd.it/snoovatar/avatars/nftv2_bmZ0X2VpcDE1NToxMzdfN2Q3YWFmMDNlYTUxYmMxNjU4ZTkzNWE4YWQwOWQ3N2Y4OWExZjI1MF8zMDE5Nzk2_rare_4e730f08-e8df-4db4-abc5-daa948872454-headshot.png?width=64&height=64&crop=smart&auto=webp&s=75f1c963d7eec5d0e216a7740df86bcffb82f830",
        "https://styles.redditmedia.com/t5_1iagoy/styles/profileIcon_snoofca6f8dd-d893-4831-b376-93dc40526153-headshot.png?width=64&height=64&frame=1&auto=webp&crop=64:64,smart&s=493b86b07ba7a9f293074d42a94fb59681b9db1d"
    ];

    var randomIndex = Math.floor(Math.random() * imgUrl.length);
    return imgUrl[randomIndex];
}