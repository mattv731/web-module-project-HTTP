import React, {useState} from 'react';

const AddMovieForm = () => {
    
    const [movie, setMovie] = useState({
		title:"",
		director: "",
		genre: "",
		metascore: 0,
		description: ""
	});

    return(
        <h3>This is a test</h3>
    )

}
export default AddMovieForm;