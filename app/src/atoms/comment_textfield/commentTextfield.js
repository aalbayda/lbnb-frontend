import TextField from '@mui/material/TextField';

const CommentTextField = () => {
    return(
        <TextField
            sx={{
                width: 950,
            }}
            id="fullWidth"
            label="Multiline"
            multiline
            maxRows={4}
        />
    )
}

export default CommentTextField;