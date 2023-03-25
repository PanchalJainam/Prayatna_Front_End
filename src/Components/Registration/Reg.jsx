import React from 'react';
import "./Reg.css";
import "bootstrap/dist/css/bootstrap.min.css";
const Reg = () => {
    return (
        <>
            <div className='container-fluid reg-main_container p-3'>
                <div className='container reg-sub_container p-3'>
                    <div className='container reg-sub_inp_container p-2 '>
                        <h3 className='text-center mb-2' style={{color:"white"}}>Registration</h3>
                        {/* <hr className='hr_line'/> */}
                        <div className='reg-input_field p-4 mt-3'>
                            <form className='reg-form-container'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">NGO Name</label>
                                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter NGO Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Trustee Name</label>
                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Trustee Name"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Address</label><br/>
                                <textarea name="" id="" className='form-control' cols="58" rows="3" ></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Activities</label>
                                 <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Activity"/>
                            
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Upload legal Document</label>
                                 <input type="file" class="form-control" id="exampleFormControlInput1" placeholder=""/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                 <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter Contact Number"/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Password</label>
                                 <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="Enter Password"/>
                            </div>
                            </form>
                        </div>

                    </div>
                    <div className='container reg-btn_access p-2 mt-3'>
                        <button type="submit"className='reg-Reg_btn'>Register</button>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Reg;
