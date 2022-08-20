import React, { useEffect } from 'react';
import Header from '../components/Header';
import { connect } from 'react-redux/es/exports';
import { useSelector } from 'react-redux'
import { sendTransaction, getAlltrans, updateTransactions, deleteTransaction } from '../store/actions/transactionAction';
import Hero from '../components/Hero/Hero';
import About from '../components/about/About';
import Finance from '../components/finance/Finance';
import Values from '../components/values/Values';
import Services from '../components/services/Services';
import Projects from '../components/projects/Projects';
import Experience from '../components/experience/Experience';
import Footer from '../components/footer/Footer';
import Experts from '../components/experts/Experts';
import Clients from '../components/clients/Clients';
import Questions from '../components/Questions/Questions';
import Letters from '../components/Letters/Letters';
const Home = (props) => {
    const trasactions = useSelector(state => state.rootReducer.trans)

    const data = {
        amount: 300,
        note: "this is note",
        type: "income"
    }
    const handleUpdate = (transaction) => {
        props.updateTransactions(transaction, data)
    }
    const handleDelete = (transaction) => {
        props.deleteTransaction(transaction, data)
    }

    useEffect(() => {
        // props.getAlltrans()
    }, [props])
    // props.sendTransaction(data)
    return (
        <div>
            <Header></Header>
            <Hero></Hero>
            <About></About>
            <Finance></Finance>
            <Values></Values>
            <Services></Services>
            <Projects></Projects>
            <Experience></Experience>
            <Experts></Experts>
            <Clients></Clients>
            <Letters></Letters>
            <Questions></Questions>
            <div style={{ marginTop: "120px" }}>
                <Footer></Footer>
            </div>
            {
                trasactions?.map(t =>
                    <li key={t._id}>{t.amount}
                        <button onClick={() => handleUpdate(t)} className="btn btn-success">update</button>
                        <button onClick={() => handleDelete(t)} className="btn btn-danger">Delete</button>
                    </li>

                )
            }
        </div>
    );
};


export default connect(null, { sendTransaction, getAlltrans, updateTransactions, deleteTransaction })(Home);