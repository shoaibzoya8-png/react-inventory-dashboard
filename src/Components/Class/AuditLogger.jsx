
import { Component } from 'react'

class AuditLogger extends Component {
  constructor(props) {
    super(props)

    this.state = {
      logs: JSON.parse(localStorage.getItem('auditLogs') || '[]')
    }
  }

  componentDidMount() {
    this.addLog('Dashboard opened')
  }

  componentDidUpdate() {
    localStorage.setItem(
      'auditLogs',
      JSON.stringify(this.state.logs)
    )
  }

  componentWillUnmount() {
    console.log('AuditLogger component removed')
  }

  addLog(message) {
    const newLog = `${new Date().toLocaleString()} - ${message}`

    this.setState((previousState) => ({
      logs: [...previousState.logs, newLog]
    }))
  }

 
render() {
  return (
    <div className="card-wrapper">
      <h2>Activity Audit Log</h2>

      {this.state.logs.length === 0 ? (
        <p>No activity recorded yet.</p>
      ) : (
        this.state.logs.map((log, index) => (
          <p key={index}>{log}</p>
        ))
      )}
    </div>
  )
}

}

export default AuditLogger
