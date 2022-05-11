import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import { propertyPosted } from './fakeData';
const Toast = Swal.mixin({
  toast: true,
  position: 'bottom-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

// ------------------All Asyn Reducers are below ------------------//

let initialState = {
  allActors: [],
  allActorsAdmin: [],
  status: null,

  currentUserIsAdmin: false,
  allProperties: [],
  clickedProperty: { property: null, owner: null, },


  currentUserIsActive: false,

  currentUserIsSeller: false,
  currentUserAllListedPropties: [],



  currentUserIsBuyer: false,
  currentUserAllBids: [],
  bidOnJobStatus: false,

  currentUser: {},
}

// ------------------All data Getter Setter Reducers ------------------//



// asyn allProperties
export const allPropertiesLoader = createAsyncThunk(
  'mainSlice/allPropertiesLoader',
  async () => {
    const data = await axios.get('/allproperties')
    return data.data;
  }
)


// // seller Refresher
// export const sellerRefresher = createAsyncThunk(
//   'mainSlice/sellerRefresher',
//   async () => {







// asyn defaultData
export const defaultData = createAsyncThunk(
  'mainSlice/defaultData',
  async () => {
    const data = await axios.get('/defaultData')
    return data.data;
  }
)

// asyn defaultAdminData
export const defaultAdminData = createAsyncThunk(
  'mainSlice/defaultAdminData',
  async () => {
    const data = await axios.get('/defaultadmindata')
    return data.data;
  }
)







// new Actor Registration
export const newActorRegistrar = createAsyncThunk(
  'mainSlice/newActorRegistrar',
  async ({ actorLoginId, actorMail, actorPhone, actorLoginPassword, actorDP, actorBio, actorFirstName, actorLastName, actorRole, actorLocation }) => {
    const data = await axios.post('/registration', { actorLoginId, actorMail, actorPhone, actorLoginPassword, actorDP, actorBio, actorFirstName, actorLastName, actorRole, actorLocation });
    return await data.data;
  }
)



// asyn Login
export const actorLogin = createAsyncThunk(
  'mainSlice/actorLogin',
  async ({ email, password }) => {
    const data = await axios.post('/login', { email, password })
    return data.data;
  }
)

// Bid on Job
export const bidOnProperty = createAsyncThunk(
  'mainSlice/bidOnProperty',
  async ({ bidderDP, bidderMongoId, bidderName, bidderMail, bidderPhone, bidPrice }) => {
    const data = await axios.post('/bidonproperty', { bidderDP, bidderMongoId, bidderName, bidderMail, bidderPhone, bidPrice })
    return data.data;
  }
);

// asyn post new Job
export const postNewProperty = createAsyncThunk(
  'mainSlice/postNewProperty',
  async ({ ownerDP, ownerMongoId, ownerName, actorMail, actorPhone, propertyTitle, propertyDescription, propertyPrice, propertyType, propertyBedrooms, propertyBathrooms, propertyArea, propertyAddress, propertyCity, propertyState, propertyZip, propertyCountry, propertyLat, propertyLng, propertyPayment, propertyPaymentMethod, propertySold, propertyNewOwner, propertyPhotos, propertyAmenities, propertyReviews, propertyBids, propertyInstallmentsPackage }) => {

    const data = await axios.post('/postnewproperty', {
      ownerDP, ownerMongoId, ownerName, actorMail, actorPhone, propertyTitle, propertyDescription, propertyPrice, propertyType, propertyBedrooms, propertyBathrooms, propertyArea, propertyAddress, propertyCity, propertyState, propertyZip, propertyCountry, propertyLat, propertyLng, propertyPayment, propertyPaymentMethod, propertySold, propertyNewOwner, propertyPhotos, propertyAmenities, propertyReviews, propertyBids, propertyInstallmentsPackage
    })
    return data.data;
  }
);


// asyn Actor Refreasher
export const actorRefresher = createAsyncThunk(
  'mainSlice/actorRefresher',
  async ({ actorMongoId, actorRole }) => {
    const data = await axios.post('/updateactordata', { actorMongoId, actorRole });
    return data.data;
  }
)


// asyn Actor Refreasher
export const jobAssigner = createAsyncThunk(
  'mainSlice/jobAssigner',
  async ({ job, freelancer, buyerId }) => {
    const data = await axios.post('/jobAssigner', { job, freelancer, buyerId });
    return data.data;
  }
)
























// asyn forgotpasswordHandler
export const forgotpasswordHandler = createAsyncThunk(
  'mainSlice/forgotpasswordHandler',
  async ({ email }) => {
    const data = await axios.post('/forgotpassword', { adminEmail: email });
    console.log('payload Forgot', data.data);
    return await data.data;
  }
)


// resetDone
export const resetDone = createAsyncThunk(
  'mainSlice/resetDone',
  async ({ newPassword, token }) => {
    const data = await axios.post('/restpassword', { newPassword, token })
    return data.data;
  }
)














// asyn setter
const mainSlice = createSlice({
  name: 'mainSlice',
  initialState,
  reducers: {
    LOG_OUT: (state) => {
      state.status = null;
      state.adminIsActive = false;
      state.registration = false;
      state.currentUserIsActive = false;
      state.currentUserIsSeller = false;
      state.currentUserIsAdmin = false;
      state.currentUserAllListedPropties = [];
      state.currentUserIsBuyer = false;
      state.currentUser = {};
      state.currentUserAllBids = [];
    },
    ClickedProperty: (state, action) => {
      state.clickedProperty.property = action.payload.property;
      state.clickedProperty.owner = action.payload.owner;
    },
  },
  extraReducers: {

    // ------------------Response Login ------------------//
    [actorLogin.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'info',
        title: 'Loading...'
      })
    },
    [actorLogin.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        if (payload.user.actorRole === 'admin') {
          Toast.fire({ icon: 'success', title: payload.message });
          delete payload.user.actorLoginPassword;
          state.currentUserIsAdmin = true;
          state.currentUserIsActive = true;
          state.currentUserIsSeller = false;
          state.currentUserIsBuyer = false;
          state.currentUser = payload.user;
        } else if (payload.user.actorRole === 'seller') {
          Toast.fire({ icon: 'success', title: payload.message });
          delete payload.user.actorLoginPassword;
          state.currentUserIsAdmin = false;
          state.currentUserIsActive = true;
          state.currentUserIsSeller = true;
          state.currentUser = payload.user;
          state.currentUserIsBuyer = false;
          state.currentUserAllListedPropties = payload.user.propertyPosted;
        } else if (payload.user.actorRole === 'buyer') {
          Toast.fire({ icon: 'success', title: payload.message });
          delete payload.user.actorLoginPassword;
          state.currentUserIsAdmin = false;
          state.currentUserIsActive = true;
          state.currentUserIsSeller = false;
          state.currentUser = payload.user;
          state.currentUserIsBuyer = true;
          state.currentUserAllBids = payload.user.bids;
        } else {
          Toast.fire({ icon: 'error', title: 'Unautherized Login Detected!' });
          state.currentUserIsAdmin = false;
          state.currentUserIsActive = false;
          state.currentUserIsSeller = false;
          state.currentUser = false;
          state.currentUserIsBuyer = false;
          state.currentUserAllPostedJobs = [];
          state.currentUserAllListedPropties = [];
        }

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [actorLogin.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },


    // ------------------Response defaultData ------------------//

    [defaultData.pending]: (state) => {
      state.status = 'loading';
    },
    [defaultData.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.allActors = payload.message;
        state.loader = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [defaultData.rejected]: (state) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },


    // ------------------Response All Properties ------------------//
    [allPropertiesLoader.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        alert()
        state.allProperties = payload.message;
        state.loader = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [allPropertiesLoader.rejected]: (state) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },



    // ------------------Response defaultAdminData ------------------//

    [defaultAdminData.pending]: (state) => {
      state.status = 'loading';
    },
    [defaultAdminData.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.allActorsAdmin = payload.message;
        state.loader = false;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [defaultAdminData.rejected]: (state) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },


    // ------------------Response Reset Password ------------------//
    [resetDone.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'info',
        title: 'Loading...'
      })
    },
    [resetDone.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Logged In Successfully'
        })
        state.resetRequest = true;
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [resetDone.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },

    // Forgort handler
    [forgotpasswordHandler.pending]: (state, action) => {
      Toast.fire({
        icon: 'success',
        title: '...Loading!',
      })
      state.status = 'loading';
    },
    [forgotpasswordHandler.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.sendMail = payload.message;
        Toast.fire({
          icon: 'success',
          title: 'Email !',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [forgotpasswordHandler.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Send Mail`,
      })
    },


    // Reset Done 
    [resetDone.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.restDoneRes = false;
    },
    [resetDone.fulfilled]: (state, { payload }) => {
      if (payload.success === true) {
        state.restDoneRes = true;
        Toast.fire({
          icon: 'success',
          title: 'Reset !',
          text: `${payload.message}`,
        })
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [resetDone.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Reset Password`,
      })
    },






    // registgrarion handler 
    [newActorRegistrar.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.registration = false;
    },
    [newActorRegistrar.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Registered !',
          text: `${payload.message}`,
        })
        state.registration = true;
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [newActorRegistrar.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Rejected! Failed to Reset Password`,
      })
    },






    // bidOnProperty handler
    [bidOnProperty.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.bidOnJobStatus = false;
    },
    [bidOnProperty.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Bid Success !',
          text: `${payload.message}`,
        })
        document.getElementById("bidplacer").reset();
        state.bidOnJobStatus = true;
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
        state.restDoneRes = false;
      }
    },
    [bidOnProperty.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Check Your Internet Connection!`,
      })
    },








    // Post New Job handler
    [postNewProperty.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.postNewJobStatus = false;
    },
    [postNewProperty.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Success !',
          text: `${payload.message}`,
        })
        document.getElementById('listNewProperty').reset();
        state.status = 'success';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
        state.status = 'failed';
      }
    },
    [postNewProperty.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: ` Check Your Internet Connection!`,
      })
    },




    // ------------------Response Refresher ------------------//
    [actorRefresher.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        console.log('payloadActor Refresher', payload);
        if (payload.user.actorRole === 'admin') {
          delete payload.user.actorLoginPassword;
          state.currentUserIsAdmin = true;
          state.currentUserIsActive = true;
          state.currentUserIsSeller = false;
          state.currentUserIsBuyer = false;
          state.currentUserAllBids = payload.updatedBids;
          state.currentUserAllListedPropties = payload.updatedProperties;
          state.currentUser = payload.user;
        } else if (payload.user.actorRole === 'seller') {
          delete payload.user.actorLoginPassword;
          state.currentUser = payload.user;
          state.currentUserAllListedPropties = payload.updatedProperties;
        } else if (payload.user.actorRole === 'buyer') {
          delete payload.user.actorLoginPassword;
          state.currentUser = payload.user;
          state.currentUserAllBids = payload.updatedBids;
        } else {
          Toast.fire({ icon: 'error', title: 'Unautherized Login Detected!' });
          state.currentUserIsAdmin = false;
          state.currentUserIsActive = false;
          state.currentUserIsSeller = false;
          state.currentUser = false;
          state.currentUserIsBuyer = false;
        }

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [actorRefresher.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },






    // ------------------Response Refresher ------------------//
    [jobAssigner.pending]: (state, action) => {
      state.status = 'loading';
      Toast.fire({
        icon: 'success',
        title: 'Loading ... !',
      })
      state.postNewJobStatus = false;
    },
    [jobAssigner.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        Toast.fire({
          icon: 'success',
          title: 'Assigned ',
        })

      } else {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${payload.message}`,
        })
      }
    },
    [jobAssigner.rejected]: (state, action) => {
      state.status = 'failed';
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Check Your Internet Connection!',
      })
    },




















































    // end of all Extra Reducers reducers
  },
})











export const { LOG_OUT } = mainSlice.actions;
export const { ClickedProperty } = mainSlice.actions;



// ------------------All Asyn Getter Setter Reducers Exporter ------------------//

export const mainReducer = mainSlice.reducer;

