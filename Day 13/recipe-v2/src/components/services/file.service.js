import {
    ref,
    uploadBytesResumable,
    getDownloadURL
  } from 'firebase/storage';

  import { storage } from '../../firebase/firebase';
    
  class FileService {
    uploadImage(file, onUploadProgress) {
      return new Promise((resolve, reject) => {
        const storageRef = ref(storage, 'images/' + file.name);
  
        const uploadTask = uploadBytesResumable(storageRef, file);
  
        uploadTask.on('state_changed',
          (snapshot) => {
            this.handleUploadProgress(snapshot, onUploadProgress);
          },
          (err) => {
            reject(this.handleError(err));
          },
          async () => {
            try {
              const fileRef = uploadTask.snapshot.ref;
              const downloadUrl = await getDownloadURL(fileRef);

              resolve(downloadUrl);
            } catch (err) {
              reject('Could not get the download URL');
            }
          }
        )
      });
    }
  
  
    handleUploadProgress(snapshot, onUploadProgress) {
      if (!onUploadProgress) { return; }
  
      onUploadProgress(
        snapshot.bytesTransferred / snapshot.totalBytes * 100
      );
    }
  
    handleError(err) {
      switch (err.code) {
        case 'storage/canceled': return 'User canceled the operation.';
        case 'storage/unauthorized': return 'User doesn\'t have permission for the operation.';
        default: return 'Error';
      }
    }
  }
  
  const service = new FileService();
  export default service;