import paramiko
import time

#Here i will set up the ssh code to connect to remote server
#Create a ssh client

def ssh_client_action(hostname,username,password):

    ssh_client = paramiko.SSHClient()

    #Add to known
    ssh_client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    ssh_client.connect(hostname=hostname,username=username, password=password)

    commands = [
        'cd',
        'dir /ad /b'
    ]

    out_put = []

    for command in commands:

        stdin, stdout, stderr = ssh_client.exec_command(command)

        out_put.append(stdout.readlines())

    #wait for 5seconds
    time.sleep(5)

    #Close Connection
    ssh_client.close()

    #print(stderr.readlines())

    return out_put