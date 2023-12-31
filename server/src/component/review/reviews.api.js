const { allowedTo, ProtectedRoutes } = require('../user/user.auth')
const { createReview, getReviews, getReview, updateReview, deleteReview } = require('./reviews.service')
const router=require('express').Router()

router.route('/').post(ProtectedRoutes,allowedTo('user'),createReview).get(getReviews)
router.route('/:id').get(getReview).put(ProtectedRoutes,allowedTo('user'),updateReview).delete(ProtectedRoutes,allowedTo('admin','user'),deleteReview)


module.exports=router