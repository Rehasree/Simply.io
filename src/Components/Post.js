import React, { Component } from 'react'
import axios from 'axios';
import Card from "./ALLFD'S/Card";
class Post extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             error:[]
        }
    }
    componentDidMount(){
        axios.get('http://eab96d953356.ngrok.io/fixedDeposit/view/all')
        .then(response=>{
            console.log(response)
            this.setState({posts:response.data})
        })
        .catch(error=>{
            console.log(error)
            this.setState({errorMsg:"Error Retriving Data"})
        })
    }
    render() {
        const { posts } = this.state
        return (
            <div>
                {
                    posts.length ?
                    posts.map(post=><div key={post.id}>
                    <Card 
                    name={post.display_name} 
                    src={post.icon} 
                    InterestRate={post.interest_rate}
                    lowerName={post.ind_riskometer}
                    Tenure={post.tenure}
                    minInvestment={post.minimum_deposit}
                    count={post.risk_score}
                    creditRating={post.credit_rating}
                    cin={post.cin}
                    payout_frequency={post.payout_frequency}
                    purchase_api_v1={post.purchase_api_v1}
                    search_display={post.search_display}
                    
                    />    
                    </div>):
                    null
                }
            </div>
        )
    }
}

export default Post
