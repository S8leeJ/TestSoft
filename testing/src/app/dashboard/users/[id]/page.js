 
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage =  ( ) => {
 
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={ "/noavatar.png"} alt="" fill />
        </div>
       test
      </div>
      <div className={styles.formContainer}>
        <form action="" className = {styles.form}>
           <label>Username</label>
          <input type="text" name="username" placeholder= "dwa" />
          <label>Email</label>
          <input type="email" name="email" placeholder= "dwa" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder= "dwa" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder= "dwa" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={true}>Yes</option>
            <option value={false} selected={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={true}>Yes</option>
            <option value={false} selected={false}>No</option>
          </select>
          <button>Update</button>
          </form>
       </div>
    </div>
  );
};

export default SingleUserPage;