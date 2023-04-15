import React,{useState,useEffect} from 'react'
import { database } from '../Appwrite/appwriteConfig'

function ShowNotes() {
	const [notes, setNotes] = useState();
	const [loader, setLoader] = useState(false);
	useEffect(() => {
		setLoader(true);
		const getNotes = database.listDocuments(
			'643a50009057605e211e',
			'643a50177e39018f3fc5',
		);

		getNotes.then(
			function (response) {
				setNotes(response.documents);
			},
			function (error) {
				console.log(error);
			},
		);
		setLoader(false);
	}, []);

	const deleteNote = (id) => {
		const promise = database.deleteDocument(
			'643a50009057605e211e',
			'643a50177e39018f3fc5',
			id,
		);
		promise.then(
			function (response) {
				console.log(response);
			},
			function (error) {
				console.log(error);
			},
		);
		window.location.reload();
	};

	return (
		<div className="max-w-7xl mx-auto">
			<p className="text-xl font-bold mb-2">Todo List</p>
			{loader ? (
				<p>Loading ...</p>
			) : (
				<div>
					{notes &&
						notes.map((item) => (
							<div key={item.$id}>
								<div className="p-4 flex items-center justify-between border-b-2 bg-gray-100 rounded-lg mb-1">
									<div>
										<p>{item.Note}</p>
									</div>
									<div>
										<span
											className="text-red-400 cursor-pointer"
											onClick={() => {
												deleteNote(item.$id);
											}}
										>
											Delete
										</span>
									</div>
								</div>
							</div>
						))}
				</div>
			)}
		</div>
	);
}

export default ShowNotes;